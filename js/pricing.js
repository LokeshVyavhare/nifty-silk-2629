
// service tables data appending using DOM//
tableData=[
    {
    title:'Channels', rowdata:[
        {rh:'Email', a1:2500, a2:'Unlimited', a3:'Unlimited'},
        {rh:'SMS', r:true, text:'Contact the sales team'},
    ]
    },
    {title:'Email account settings', rowdata:[
        {rh:'Multiple users', a1:'Unlimited',a2:'Unlimited',a3:'Unlimited'},
        {rh:'Users roles & permissions', a1:false,a2:false,a3:false},
        {rh:'Two Facor Authentication', a1:false,a2:false,a3:false},

    ]

    },
    {title:'Core Email Features', rowdata:[
        {rh:'Drag-and-drop builder',  a1:false,a2:false,a3:false},
        {rh:'Customizable template library', a1:false,a2:false,a3:false},
        {rh:'Custom coded templates', a1:false,a2:false,a3:false},
        {rh:'Branded templates', a1:false,a2:false,a3:false},
        {rh:'Segmentation tools', a1:false,a2:false,a3:'Advanced engagement segments'},
        {rh:'Free image gallery', r:true, a1:false,a2:false,a3:false},
        {rh:'Signup forms', a1:false,a2:false,a3:false},
        {rh:'Mobile optimization tools', a1:false,a2:false,a3:false},
        {rh:'A/B testing', a1:false,a2:false,a3:false},
        {rh:'Preference Center', a1:false,a2:false,a3:false},
        {rh:'Real-time reporting analytics', a1:false,a2:false,a3:false},
        {rh:'Worldview reporting', a1:false,a2:false,a3:false},

    ]

    },
    {title:'Advanced email features', rowdata:[
        {rh:'Automated emails', a1:'Limited to send volume',a2:'unlimited',a3:'Unlimited'},
        {rh:'RSS feed trigger', a1:false,a2:false,a3:false},
        {rh:'Transactional emails', a1:false,a2:false,a3:false},
        {rh:'Campaign Tags', a1:false,a2:false,a3:false},
        {rh:'Dynamic content', a1:false,a2:false,a3:false},
        {rh:'Custom fields', a1:false,a2:false,a3:false},
        {rh:'Countdown timer', a1:true,a2:false,a3:false},
        {rh:'Time zone sending', a1:true,a2:false,a3:false},
        {rh:'Send time optimization', a1:true,a2:true,a3:false},
        {rh:'Email section locking', a1:true,a2:true,a3:false},
        {rh:'Advanced link tracking', a1:true,a2:true,a3:false},

    ]
    },
    {title:'Help & support', rowdata:[
        {rh:'Link review', r:true, a1:false,a2:false,a3:false},
        {rh:'Design & spam testing', a1:true,a2:false,a3:false},
        {rh:'Email support', a1:false,a2:'Priority',a3:'Premier'},
        {rh:'Phone support', a1:true,a2:true,a3:false},
        {rh:'Deliverability support', a1:false,a2:false,a3:false},
        {rh:'help Center', a1:false,a2:false,a3:false},
        {rh:'Training videos', a1:false,a2:false,a3:false},
        {rh:'Email academy', a1:false,a2:false,a3:false},
    ]
    },
    {title:'Integrations', rowdata:[
        {rh:'API access', a1:false,a2:false,a3:false},
        {rh:'Advertising', a1:false,a2:false,a3:false},
        {rh:'Biling', a1:false,a2:false,a3:false},
        {rh:'CMS', a1:false,a2:false,a3:false},
        {rh:'Content & video', a1:false,a2:false,a3:false},
        {rh:'CRM', a1:false,a2:false,a3:false},
        {rh:'E-commerce', a1:false,a2:false,a3:false},
        {rh:'Email address verification', a1:false,a2:false,a3:false},
        {rh:'Email testing', a1:false,a2:false,a3:false},
        {rh:'Events', a1:false,a2:false,a3:false},
        {rh:'Landing pages', a1:false,a2:false,a3:false},
        {rh:'Lifecycle marketing', a1:false,a2:false,a3:false},
        {rh:'List management', a1:false,a2:false,a3:false},
        {rh:'Loyalty & referal', a1:false,a2:false,a3:false},
        {rh:'Mobile', a1:false,a2:false,a3:false},
        {rh:'Personalization', a1:false,a2:false,a3:false},
        {rh:'Reporting & analytics', a1:false,a2:false,a3:false},
        {rh:'Signup forms', a1:false,a2:false,a3:false},
        {rh:'Surveys', a1:false,a2:false,a3:false},
    ]
    },
    {title:'Agency Features', rowdata:[
        {rh:'Tiered account setup', a1:false,a2:false,a3:false},
        {rh:'Client dashboard', a1:false,a2:false,a3:false},
        {rh:'User roles & permissions', a1:false,a2:false,a3:false},
        {rh:'Private labeling', a1:false,a2:false,a3:false},
        {rh:'Markup options', a1:false,a2:false,a3:false},
        {rh:'In-app biling management', a1:false,a2:false,a3:false},
        {rh:'Contract & PAYG options', a1:false,a2:false,a3:false},
        {rh:'Email section locking', a1:true,a2:true,a3:false},
        {rh:'Unique API keys by subaccount', a1:false,a2:false,a3:false},
        {rh:'Template sharing', a1:false,a2:false,a3:false},
        {rh:'Automation sharing', a1:false,a2:false,a3:false},
        {rh:'Charge in local currency', a1:false,a2:false,a3:false},
    ]
    }


]
let section=document.getElementById('services');
tableData.forEach(function(i){
    let h1=document.createElement('h1');
    h1.innerText=i.title;
    h1.setAttribute('class', 'heading')
    section.append(h1);
    i.rowdata.forEach(function(j){
        let row=document.createElement('tr');

        let t1=document.createElement('td');
        t1.setAttribute('class','rh')
        t1.innerText=j.rh; 
        
        if(j.r==true){
            let ne=document.createElement('span');
            ne.innerText='New';
            t1.append(ne);
        }
        
        row.append(t1)
        if(j.text!=undefined){
            let text=document.createElement('td');
            text.innerText=j.text;
            text.setAttribute('colspan', '3');
            row.append(text)
        }else if(j.a1!=undefined){
            let t2=document.createElement('td');
            if(j.a1==false){
                t2.innerHTML= '&#10004;';
                t2.setAttribute('class','gr-tick')
            }else if(j.a1==true){
                t2.innerText= ' ';
            }else{
                t2.innerText=j.a1;
            }
            
            let t3=document.createElement('td');
            if(j.a2==false){
                t3.innerHTML= '&#10004;';
                t3.setAttribute('class','gr-tick')
            }else if(j.a2==true){
                t3.innerText= ' ';
            }else{
                t3.innerText=j.a2;
            }
            let t4=document.createElement('td');
            if(j.a3==false){
                t4.innerHTML= '&#10004;';
                t4.setAttribute('class','gr-tick')
            }else if(j.a3==true){
                t4.innerText= ' ';
            }else{
                t4.innerText=j.a3;
            }
            row.append(t2, t3, t4);
        }

       section.append(row);
    })
})

// subscription plan scroll function
window.onscroll=function(){
    if(document.documentElement.scrollTop>=714){
        document.querySelectorAll('.planV>p').forEach(function(i){
            i.setAttribute('class', 'dis-none')
        })
    }else{
        document.querySelectorAll('.planV>p').forEach(function(i){
            i.setAttribute('class', 'dis-block')
        })
    }
}

// 
let x=document.querySelector("input[type='range']")
x.addEventListener('input', pricetool);
x.value=0;
function pricetool(event){
    let count=event.target.value;
    document.querySelector('#pricetool>h3>span').innerText=count;
    let p1, p2, p3;
    if(count<500){
        p1=9;
        p2=29;
        p3=149;
    }else if(count<2500){
        p1=29;
        p2=59;
        p3=149;
    }else if(count<5000){
        p1=49;
        p2=99;
        p3=149;
    }else if(count<10000){
        p1=89;
        p2=149;
        p3=249;
    }else if(count<15000){
        p1=129;
        p2=249;
        p3=399;
    }else if(count<25000){
        p1=199;
        p2=399;
        p3=449;
    }else{
        p1=299;
        p2=699;
        p3=989;
    }
    document.querySelectorAll('.plan')[0].querySelector('p>b').innerText=p1;
    document.querySelectorAll('.plan')[1].querySelector('p>b').innerText=p2;
    document.querySelectorAll('.plan')[2].querySelector('p>b').innerText=p3;
    document.querySelectorAll('.plan')[3].querySelector('p>b').innerText=p1;
    document.querySelectorAll('.plan')[4].querySelector('p>b').innerText=p2;
    document.querySelectorAll('.plan')[5].querySelector('p>b').innerText=p3;

    
}

document.getElementById('sideTrig').addEventListener('click',function(event){
    if(this.classList.contains('active')){
        this.classList.remove('active')
        this.innerHTML='&equiv;'
    }else{
        this.classList.add('active');
        this.innerHTML='X'

    }
})