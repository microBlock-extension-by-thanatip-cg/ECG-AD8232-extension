Blockly.Python['ECG_Setup_PIN'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_ECG_ADB8232'] = 'import ECG_ADB8232';
  Blockly.Python.definitions_['import_ECG_filter'] = 'import ECG_filter';

  var dropdown_LO_1 = block.getFieldValue('LO_1');
  var dropdown_LO_2 = block.getFieldValue('LO_2');
  var dropdown_signal = block.getFieldValue('signal');

  var code = `LO_1_PIN, LO_2_PIN, signal_PIN = ${dropdown_LO_1}, ${dropdown_LO_2}, ${dropdown_signal}\n`;
  return code;
};

Blockly.Python['ECG_Chart'] = function(block) {


  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);

  var code = `ECG_filter.ECG_sensor(LO_1_PIN, LO_2_PIN, signal_PIN, ${value_value}, ${value_value1})\n`;
  return code;
};

Blockly.Python['ECG_Data'] = function (block) {
 
  var code = `ECG_ADB8232.ECG_sensor(LO_1_PIN, LO_2_PIN, signal_PIN)`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ECG_Delay'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';


  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = `time.sleep_ms(${value_value})\n`;
  return code;
};