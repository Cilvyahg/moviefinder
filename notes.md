### switch (if you check one variable switch is a good case otherwise use if  )
switch (text) {
  case condition:
  then do this ...
  break; 
  }
  
} default (if non of the cases is)


switch will check the cases and break out of the switch statement when it finds a match.


### radio buttons
As mentioned, radio buttons come in groups. Use the required name attribute to group together a set of related radio buttons. In the above example, all <input>s share the same value for name, so they are treated as part of the same group. This lets users only choose one option in a group at a time — try it out above.


//change event

input event .. fire of when the value of your input get's changed. also works for backspaces and etc. 

change event .. fires when the user changed the value. 



## events

browselevel event - load, resize, scroll
dom level events (when we do something in the websitre) - mouse, formbased events and etc.

how to use

-first grab the DomNode 
-tell this domNode what need to happen by giving the -event (click, mouseover and etc);


## prevent default

the event object gives us information about the event that occured. 



e.preventDefault()

prevents the default functioning be happening. 
for instance when you submit a form. the default behavior is going to another page. but if you want to prevent the default behavior. 


vb

 // log(`the button with this value :: `, this.value, ` has been checked`, e);
  // log(e)
  // log(e.target.id);
  // log(e.target.value)


// searchh bar