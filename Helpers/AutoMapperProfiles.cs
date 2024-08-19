using System;
using AutoMapper;
using WebApi.DTOs;
using WebApi.Entities;
using WebApi.Extensions;
namespace WebApi.Helpers;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        CreateMap<AppUser, MemberDTO>()
            .ForMember(d => d.Age, o => o.MapFrom(s => s.DateOfBirth.Calculateage()))
            .ForMember(d => d.PhotoUrl, o => o.MapFrom(s => s.Photos.FirstOrDefault(x => x.IsMain)!.Url));
            //OK So this lambda snail is basically telling automapper to map from destination(d) with the options(o): from the source(s) the photos from the member(x) and setting it as null if it is the case(!)
        CreateMap<Photo, PhotoDTO>();
    }
}
