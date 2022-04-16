from machine import Pin
from machine import ADC
import time

def ECG_sensor(LO_1, LO_2, ECG_signal,F , D):

  adc = ADC(Pin(ECG_signal))
  adc.atten(ADC.ATTN_11DB)
  adc.width(ADC.WIDTH_12BIT)
  
  sensorValue = 0
  EMA_a = F
  EMA_S = 0
  highpass = 0
  Delay = D

  EMA_S = adc.read()

  while True:
    IN_1 = Pin(LO_1, Pin.IN).value()
    IN_2 = Pin(LO_2, Pin.IN).value()
    
    if IN_1 == 1 or IN_2 == 1:
     print(str('ECG') + "=" + str('%.2f' %0))
    else: 
      sensorValue = adc.read()
      EMA_S = (EMA_a * sensorValue) + ((1 - EMA_a) * EMA_S)
      highpass = sensorValue - EMA_S
      print(str('ECG') + "=" + str('%.2f' %highpass))
      time.sleep_ms(Delay)
