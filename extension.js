({
    name: "pH Sensor",
    description: "อ่านค่า pH จาก Analog pH Sensor พร้อมคาลิเบรท",
    author: "cap_apiluk",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png",
    color: "#3498db",
    blocks: [
        {
            xml: `
                <block type="ph_read_value">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">34</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="ph_read_voltage">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">34</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="ph_set_offset">
                    <value name="offset">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        }
    ],
    chip: [
        "ESP32",
        "Arduino"
    ]
});
