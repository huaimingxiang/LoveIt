# Spring boot学习第一天总结


<!--more-->


## 1.语法问题

   hashmap等数据结构，参数是范型，不需要传入对应的类型，HashMap<>；

``` java
       @RequestMapping(value = "mapValue")
       @ResponseBody
       public Map<String,Object> mapValue(){
   				//Map<String,Object> retMap = new HashMap<String,Object>();
           Map<String,Object> retMap = new HashMap<>();
           retMap.put("message:","Spring boot");
           return retMap;
       }
```

## 2.语法差异
   Controller层注入Service层，Service层注入Dao层，通过@Autowired来自动注入；
   Springboot官方建议使用final来修饰成员变量，然后通过构造方法来进行注入；
    

 ``` java
    @Controller
    public class IndexController {
    
        //@Autowired 
        //private Define define;
        private final Define define;
    
      	....
    }
 ```

## 3.核心文件配置

多核心配置文件，支持多环境配置文件的切换

<img src="http://ubtcn.huaimingxiang.top:8830/images/2021/12/17/202112170035123.png" alt="image-20211217003423689" style="zoom:50%;" />



## 4.多文件配置

自定义核心配置文件
       对于报警信息，可以通过增加配置依赖来解决

  ``` java
    define:
      name: huaimingxiang
      password: Cpic831205
    
	<!-- config配置依赖 -->
		<dependency>
    <groupId> org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
    <optional>true</optional>
	</dependency>
  ```


  [www.huaimingxiang.site](https://huaimingxiang.site)


