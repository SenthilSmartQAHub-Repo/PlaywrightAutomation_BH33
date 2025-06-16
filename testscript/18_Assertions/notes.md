

Assertions:
===========
    1. Non-retrying assertions (Assert the values)- no await
        string, boolean, null, undefined , number
    2. Auto-retrying assertions(Assert element or page) await


    Assertion classified two types:
    ===============================
      
      1.  Hard Assertion
              if Assertion gets failed remaining steps will not be executed.
      2.  Soft Assertion
              if Assertion gets failed remaining steps will be executed
      Example :
       await expect(studentoneelement).toBeChecked() //Hard Assertion
       await expect.soft(studentoneelement).toBeChecked() //Soft Assertion


  Nagative Assertion:
  ===================

     not

       await expect(studentoneelement).not.toBeChecked()



