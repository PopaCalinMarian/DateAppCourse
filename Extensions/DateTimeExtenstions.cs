using System;

namespace WebApi.Extensions;

public static class DateTimeExtenstions
{
    public static int Calculateage(this DateOnly dob) {
        var today = DateOnly.FromDateTime(DateTime.Now);

        var age = today.Year - dob.Year;

        if(dob > today.AddYears(-age)) age--;//in case we added an extra year to the age bcs of being born on the month after 

        return age;
    }
}
