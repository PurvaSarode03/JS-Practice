function meth1(){
    const pi=3.14;
    console.log(pi);

    pi=2.2;
    console.log(pi);
    }

    function meth2(){
        meth1();

    }

    function meth3(){
        try {
            meth2()
        } catch (error) {
          console.log(error.name +":" + error.message);
            
        }
    }
    meth3();