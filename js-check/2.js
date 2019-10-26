const user = {
    firstname : 'John',
    lastname : 'Dou',
    rate : 0.86,
    adress : {
        line1 : '15 Macon st.',
        line2 : '',
        city : 'Gotam'
    },
    phoneNumbers : [
        {
            type : 'MOBILE',
            number : '(555) 555-1234'
        },
        {
            type : 'LINE',
            number : '(555) 555-5678'
        }
    ]
}
if (typeof(user.firstname) == 'string' && typeof(user.lastname) == 'string' && (user.rate>=0 && user.rate<=1))
{
    console.log('start OK')
    var adress = user.adress;
    if (adress!= null && typeof(adress.line1) == 'string' && typeof(adress.line2) == 'string' && typeof(adress.city) == 'string')
    {
        console.log('adress OK')
    }
    var phoneNumbers = user.phoneNumbers;
    if (phoneNumbers.length > 0)
    {
        if(phoneNumbers[0].type=='MOBILE')
        {
            var r = new RegExp("\([0-9]{3}\)\s[0-9]{3}\-[0-9]{4}")
            var val = r.test(phoneNumbers[0].number)
            if (val)
            {
                console.log('phoneNumbers OK')
            }
        }
    }
}