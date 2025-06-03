document.addEventListener('DOMContentLoaded', function ()
{
    const form = document.forms['AdoptionForm'];

    form.addEventListener('submit', function (event)
    {
        event.preventDefault(); 
        
        
        let isValid = true;

        
        const firstName = form.elements['FirstName'].value.trim();
        const lastName = form.elements['LastName'].value.trim();
        if (!firstName || !lastName || !/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName))
        {
            isValid = false;
            alert('Please enter a valid first and last name.');
        }

        
        const mobileNumber = form.elements['MobileNumber'].value.trim();
        const emailAddress = form.elements['EmailAddress'].value.trim();
        if (!mobileNumber && !emailAddress)
        {
            isValid = false;
            alert('Please provide either a mobile number or an email address.');
        }
        else
        {
            
            if (mobileNumber && !/^\d+$/.test(mobileNumber))
            {
                isValid = false;
                alert('Please enter a valid mobile number.');
            }

            
            if (emailAddress && !isValidEmail(emailAddress))
            {
                isValid = false;
                alert('Please enter a valid email address.');
            }
        }

        
        const yearOfBirth = form.elements['Years'].value;
        const currentYear = new Date().getFullYear();
        if (yearOfBirth === 'Default' || currentYear - parseInt(yearOfBirth) < 18)
        {
            isValid = false;
            alert('You must be over 18 years old to adopt a pet.');
        }

        
        const residence = form.elements['Residence'].value;
        if (residence === 'Default')
        {
            isValid = false;
            alert('Please select a residence type.');
        }

       
        const otherPets = form.elements['OtherPets'].value;
        if (!otherPets)
        {
            isValid = false;
            alert('Please indicate if you have other pets.');
        }
        else if (otherPets === 'Yes')
        {
            
            const additionalPets = form.elements['AdditionalPets'].value.trim();
            if (!additionalPets) {
                isValid = false;
                alert('Please list any additional pets in your household.');
            }
        }

        
        const preference = form.elements['Preference'].value;
        if (preference === 'Default')
        {
            isValid = false;
            alert('Please select a pet preference.');
        }

        
        const petAgeCheckboxes = form.querySelectorAll('input[name="PetAge"]:checked');
        if (petAgeCheckboxes.length === 0)
        {
            isValid = false;
            alert('Please select at least one pet age preference.');
        }

        
        if (!form.elements['Agreement'].checked)
        {
            isValid = false;
            alert('Please agree to the terms of adoption.');
        }

        
        if (isValid)
        {
            form.submit();
        }
    });
});

function isValidEmail(email)
{
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
