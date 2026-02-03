(function (Entry) {
  var ext = {};
  
  // ตัวแปรเก็บ Offset
  let phOffset = 0;
  let vRef = 3.3;
  let resolution = 4095;

  // ฟังก์ชันเรียกครั้งแรก
  ext._shutdown = function () {};
  ext._getStatus = function () {
    return {status: 2, msg: 'Ready'};
  };

  // ฟังก์ชันตั้ง Offset
  ext.setPHOffset = function (value) {
    phOffset = parseFloat(value);
  };

  // ฟังก์ชันอ่านค่าแรงดัน ph
  ext.readPHVoltage = function (pin) {
    var adc = Entry.hw.portData[`A${pin}`] || 0;
    var voltage = (adc * vRef) / resolution;
    return parseFloat(voltage.toFixed(3));
  };   

  // ฟังก์ชันอ่านค่า pH
  ext.readPH = function (pin) {
    var adc = Entry.hw.portData[`A${pin}`] || 0;
    var voltage = (adc * vRef) / resolution;
    var phValue = 7 + (2.5 - voltage) / 0.18 + phOffset;
    return parseFloat(phValue.toFixed(2));
  };

  // รายการ Block ที่ใช้แสดงใน MicroBlock
  var descriptor = {
    blocks: [
      ['r', 'อ่านค่า pH (ขา A %0)', 'readPH', '34'],
      ['r', 'อ่านค่าแรงดัน pH (ขา A %0)', 'readPHVoltage', '34'],
      [' ', 'ตั้งค่า pH Offset %0', 'setPHOffset', '0']
    ],
    menus: {},
    url: 'https://your-doc-url'
  };

  // register
  Entry.extensions.ph_sensor = ext;
  Entry.staticBlocks['ph_sensor'] = descriptor.blocks;
  Entry.blockMenuBlocks.push('readPH', 'readPHVoltage', 'setPHOffset');
})(typeof Entry !== 'undefined' ? Entry : (window.Entry || {}));
