({
    name: "ECG-AD8232", // Category Name
    description: "ADB8232 ECG Sensors",
    author: "AJ.TAY",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#004098", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
	{
            xml: `
                <block type="ECG_Setup_PIN">
                    <field name="LO_+">23</field>
                    <field name="LO_-">19</field>
		    <field name="signal">32</field>
                </block>
            `
        },
	{
            xml: `
                <block type="ECG_Chart">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">0.6</field>
                        </shadow>
                    </value>
		    <value name="value1">
                        <shadow type="math_number">
                            <field name="NUM">35</field>
                        </shadow>
                    </value>
                </block>
            `
        },
	"ECG_Data",
        {
            xml: `
                <block type="ECG_Delay">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">10</field>
                        </shadow>
                    </value>
                </block>
            `
        }
    ]
});
