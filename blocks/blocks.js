Blockly.defineBlocksWithJsonArray([
    {
        "type": "ph_read_value",
        "message0": "อ่านค่า pH (ขา A %1)",
        "args0": [
            {
                "type": "input_value",
                "name": "pin",
                "check": "Number"
            }
        ],
        "output": "Number",
        "colour": "#3498db",
        "tooltip": "อ่านค่า pH จาก Analog Pin",
        "helpUrl": ""
    },
    {
        "type": "ph_read_voltage",
        "message0": "อ่านค่าแรงดัน pH (ขา A %1)",
        "args0": [
            {
                "type": "input_value",
                "name": "pin",
                "check": "Number"
            }
        ],
        "output": "Number",
        "colour": "#3498db",
        "tooltip": "อ่านค่าแรงดันจาก pH Sensor",
        "helpUrl": ""
    },
    {
        "type": "ph_set_offset",
        "message0": "ตั้งค่า pH Offset %1",
        "args0": [
            {
                "type": "input_value",
                "name": "offset",
                "check": "Number"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#3498db",
        "tooltip": "ปรับค่า Offset สำหรับคาลิเบรท pH",
        "helpUrl": ""
    }
]);
