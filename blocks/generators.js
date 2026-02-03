Blockly.JavaScript['ph_read_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `(function() {
        var adc = analogRead(${pin});
        var voltage = (adc * 3.3) / 4095;
        var phValue = 7 + (2.5 - voltage) / 0.18 + phOffset;
        return Math.round(phValue * 100) / 100;
    })()`; 
    
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['ph_read_voltage'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `(function() {
        var adc = analogRead(${pin});
        var voltage = (adc * 3.3) / 4095;
        return Math.round(voltage * 1000) / 1000;
    })()`;
    
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['ph_set_offset'] = function(block) {
    var offset = Blockly.JavaScript.valueToCode(block, 'offset', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `phOffset = ${offset};\n`;
    
    return code;
};
