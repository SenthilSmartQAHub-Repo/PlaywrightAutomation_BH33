
This selector are used in locator method(used to identity the element)
1. AttributeSelector  =>   [pn=pv]
2. TextSelector   => text=textcontent
3. CSSSelector  => Forward direction(Faster than xpath)

   1. TagName and attribute
          tagname[pn='pv']  or css = tagname[pn='pv']
   2. ID attribute
         #IDpropertyValue
   3. class Attribute
        .ClassPerpertyvalue
   4. MulitpleAttribute
         tagname[pn='pv'][pn='pv']

   5. Partial Match on attribute value
                                         Acutal expression:  input[id='username']
       Start with => tagname[pn^='pv']   ex: input[id='user']
       EndsWith   => tagname[Pn$='pv']    ex: input[id='name']
       constains  => tagname[pn*='pv']    ex: input[id='ernam']

    6. Child Elements
    
       1. Direct child
           <div>
              <a>
                 <li>

         a > li
         div[class='desktop-input-container'] > input
         .desktop-input-container > input

    2. Descendant
          
        div li
       .post-body-container input
           
4. XpathSelector
    
      1. Absolute path

              /html/body/div[1]/div/div/main/div/div[1]/div/div/div/div[2]/div[2]/div/table/tbody/tr[1]/td[5]/button

      2. Relative path 
          
            1. xpath using attribute
              
                //htmltagname[@propertyname='propertyvalue']  ==> //button[@class='delete-btn']

             2. xpath using text content
               
                 //htmltagname[text()='textContent']  => //a[text()='Finding the viewport of your browser']

      3.  xpath functions:

             <a>  welcome  </a>
           
               1. text()   =>    //htmltagname[text()='textContent'] 
               2. contains() =>  //htmltagname[contains(text(),'partial text content')]
               3. normalize-space() => //htmltagname[normalize-space()='text content']
               4. starts-with() => //htmltagname[starts-with()='starting word']
                        
      4.  xpath Axes
         
         
            1. .. -> parent tag  => //td[text()='Alice Johnson']/..

            2. /child::  -> child tag  ==> //div[@class='info-box']/child::div
               or
               /    => //div[@class='info-box']/div

           3.  following-sibling:: (younger sibling)

               /following-sibling::   => //td[text()='Alice Johnson']/following-sibling::td

           4.  preceding-sibling:: (elder sibling)

                 /preceding-sibling::  => //td[text()='Alice Johnson']/preceding-sibling::td

            5. following --> parent to any sibling child

                 /following::
 
                 //a[text()='click']/following::div

            6. preceding

                  /preceding::      //h3[text()='Scroll Operation']/preceding::a[text()='ColorChecking']

     
            7. // parent to any of the child  or /descendant::

                      //div[@class='post-body-container']//div[@class='info-item']
                      //div[@class='post-body-container']/descenant::div[@class='info-item']






         <a > clik </a>
         div
         div
           div
              div
                
         

<span>
 <div> GP
      <a> P
        <li> C 
        <li>





          div  li
          span li


          a>li
          div>a