from machine import Pin
from machine import ADC

def ECG_sensor(LO_1, LO_2, ECG_signal):

  IN_1 = Pin(LO_1, Pin.IN).value()
  IN_2 = Pin(LO_2, Pin.IN).value()
  adc = ADC(Pin(ECG_signal))
  adc.atten(ADC.ATTN_11DB)
  adc.width(ADC.WIDTH_12BIT)
    
  if IN_1 == 1 or IN_2 == 1:
    Adc_out = 0
  else:
    Adc_out = adc.read()
   
  return Adc_out

