(function () {

  /* ===== ตัวแปร ===== */
  var phOffset = 0;
  var vRef = 3.3;
  var resolution = 4095;

  /* ===== Extension Object ===== */
  var ext = {};

  ext._shutdown = function () {};

  ext._getStatus = function () {
    return { status: 2, msg: 'Ready' };
  };

  /* ===== ตั้งค่า Offset ===== */
  ext.setPHOffset = function (value) {
    phOffset = parseFloat(value);
  };

  /* ===== อ่านแรงดัน pH ===== */
  ext.readPHVoltage = function (pin) {
    var adc = Scratch.sensorValue("A" + pin) || 0;
    var voltage = (adc * vRef) / resolution;
    return Math.round(voltage * 1000) / 1000;
  };

  /* ===== อ่านค่า pH ===== */
  ext.readPH = function (pin) {
    var adc = Scratch.sensorValue("A" + pin) || 0;
    var voltage = (adc * vRef) / resolution;
    var phValue = 7 + (2.5 - voltage) / 0.18 + phOffset;
    return Math.round(phValue * 100) / 100;
  };

  /* ===== Block Descriptor ===== */
  var descriptor = {
    blocks: [
      ['r', 'อ่านค่า pH (A %0)', 'readPH', '34'],
      ['r', 'อ่านแรงดัน pH (A %0)', 'readPHVoltage', '34'],
      [' ', 'ตั้งค่า pH Offset %0', 'setPHOffset', '0']
    ]
  };

  /* ===== Register ===== */
  ScratchExtensions.register(
    'PH Sensor',
    descriptor,
    ext
  );

})();
