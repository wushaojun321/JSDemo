#网页版扫雷
##实现功能  
   1、左键排雷  
   2、中键标记雷  
   3、双击为0的TD获得帮助：递归的将所有为0的旁边的排掉

##遇到的坑   
>  1、js中的鼠标事件    
>>   1)需添加onmousedown事件  
     2)JS获取通过window.event.button，0：左键；1：中键；2，右键  


>  2、JS的树型遍历   

>>     
>  1)原子操作应该为点击0旁边的八个TD，而非点击一个   
>  2）递归的停止条件应该为：   
>>>a、此TD周围有雷   
   b、此TD到达边界   
   c、此TD之前已经被执行过   
>> 每个TD只要满足这以上三点之一则此树叉停止


   