
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