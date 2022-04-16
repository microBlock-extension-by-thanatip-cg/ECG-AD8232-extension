Blockly.defineBlocksWithJsonArray([
{
  "type": "ECG_Setup_PIN",
  "message0": "ECG Sensors Setup PIN LO_+: %1 LO_-: %2 signal: %3",
  "args0": [
        {
      "type": "field_dropdown",
      "name": "LO_1",
      "options": [
        [
          "23",
          "23"
        ],
        [
          "19",
          "19"
        ],
        [
          "18",
          "18"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "LO_2",
      "options": [
        [
          "19",
          "19"
        ],
        [
          "18",
          "18"
        ],
        [
          "23",
          "23"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "signal",
      "options": [
        [
          "IN1",
          "32"
        ],
        [
          "IN2",
          "33"
        ],
        [
          "IN3",
          "34"
        ],
        [
          "IN4",
          "35"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#004098",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ECG_Chart",
  "message0": "ECG Show Chart : Set Filter %1 Delay %2",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "value1",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#004098",
  "tooltip": "Dalay ms. (10)",
  "helpUrl": ""
},

{
  "type": "ECG_Data",
  "message0": "ECG Show Data",
  "output": null,
  "colour": "#004098",
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "ECG_Delay",
  "message0": "Delay millisecond %1",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#004098",
  "tooltip": "Dalay ms. (10)",
  "helpUrl": ""
}

]);
