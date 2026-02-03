Blockly.JavaScript['ph_read_value'] = function(block) {
    Blockly.JavaScript.definitions_['include_ph_sensor'] = '#include <Arduino.h>';
    
    if (!Blockly.JavaScript.definitions_['var_ph_offset']) {
        Blockly.JavaScript.definitions_['var_ph_offset'] = 'float phOffset = 0;';
    }
    
    var pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `([]() {
    int adc = analogRead(${pin});
    float voltage = (adc * 3.3) / 4095.0;
    float phValue = 7.0 + (2.5 - voltage) / 0.18 + phOffset;
    return phValue;
})()`; 
    
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['ph_read_voltage'] = function(block) {
    Blockly.JavaScript.definitions_['include_ph_sensor'] = '#include <Arduino.h>';
    
    var pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `([]() {
    int adc = analogRead(${pin});
    float voltage = (adc * 3.3) / 4095.0;
    return voltage;
})()`;
    
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['ph_set_offset'] = function(block) {
    if (!Blockly.JavaScript.definitions_['var_ph_offset']) {
        Blockly.JavaScript.definitions_['var_ph_offset'] = 'float phOffset = 0;';
    }
    
    var offset = Blockly.JavaScript.valueToCode(block, 'offset', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `phOffset = ${offset};\n`;
    
    return code;
};
