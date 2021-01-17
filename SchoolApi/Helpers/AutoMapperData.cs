using AutoMapper;
using SchoolApi.Dtos;
using SchoolApi.Models;

namespace SchoolApi.Helpers
{
    public class AutoMapperData : Profile
    {
        public AutoMapperData(){
            CreateMap<User, UserForRegisterDto>();
            CreateMap<UserForUpdateDto, User>();
        }
    }
}