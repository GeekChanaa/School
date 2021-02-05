using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SchoolApi.Data;
using System;
using System.Linq;
using System.Text;

namespace SchoolApi.Models
{
    public static class SeedData
    {
        public static void Initialize (IServiceProvider serviceProvider){
            
            using (var context = new DataContext(serviceProvider.GetRequiredService<DbContextOptions<DataContext>>())){
                AuthRepository _authRepo = new AuthRepository(context);
                string pass = "chanaasimo";
                byte[] passhash, passsalt;

                // Creating password hash for populating the first database
                _authRepo.CreatePasswordHash(pass,out passhash,out passsalt);
                if(context.Privileges.Any()){
                    return;
                }
                context.Privileges.AddRange(
                    new Models.Privilege
                    {
                        Title = "Admin"
                    },
                    new Models.Privilege
                    {
                        Title = "Teacher"
                    },
                    new Models.Privilege
                    {
                        Title = "Student"
                    },
                    new Models.Privilege
                    {
                        Title = "Guest"
                    }
                );

                context.Users.AddRange(
                    new Models.User{CIN = "KB123456",CNE = "KB123456",FirstName = "KB123456",LastName = "KB123456",CodeAppoge = "546540",date_birth = DateTime.Now,Email = "chanaa.projects@gmail.com",PasswordHash = passhash,PasswordSalt = passsalt},
                    new Models.User{CIN = "00001",CNE = "00051" , FirstName="omar", LastName = "nouiri", CodeAppoge = "21321", date_birth = DateTime.Now , Email="omar.nouiri@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00002",CNE = "00052" , FirstName="imad", LastName = "motanabbi", CodeAppoge = "4651", date_birth = DateTime.Now , Email="imad.motanabbi@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00003",CNE = "00053" , FirstName="michelmarie", LastName = "lamah", CodeAppoge = "1000", date_birth = DateTime.Now , Email="michelmarie.lamah@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00004",CNE = "00054" , FirstName="samira", LastName = "khalfaoui", CodeAppoge = "1001", date_birth = DateTime.Now , Email="samira.khalfaoui@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00005",CNE = "00055" , FirstName="zineb", LastName = "elbekri", CodeAppoge = "1002", date_birth = DateTime.Now , Email="zineb.elbekri@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00006",CNE = "00056" , FirstName="anwar", LastName = "slilam", CodeAppoge = "1003", date_birth = DateTime.Now , Email="anwar.slilam@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00007",CNE = "00057" , FirstName="yousra", LastName = "serroukh", CodeAppoge = "1004", date_birth = DateTime.Now , Email="yousra.serroukh@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00008",CNE = "00058" , FirstName="reda", LastName = "briksi", CodeAppoge = "1005", date_birth = DateTime.Now , Email="reda.briksi@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00009",CNE = "00059" , FirstName="leila", LastName = "samih", CodeAppoge = "1006", date_birth = DateTime.Now , Email="leila.samih@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00010",CNE = "00060" , FirstName="nouha", LastName = "benlarabi", CodeAppoge = "1007", date_birth = DateTime.Now , Email="nouha.benlarabi@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00011",CNE = "00151" , FirstName="adnane", LastName = "ameziane", CodeAppoge = "1008", date_birth = DateTime.Now , Email="adnane.ameziane@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00012",CNE = "00251" , FirstName="abdelkarim", LastName = "imghi", CodeAppoge = "1009", date_birth = DateTime.Now , Email="abdelkarim.imghi@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00013",CNE = "00351" , FirstName="ahmed", LastName = "aouladaomar", CodeAppoge = "1010", date_birth = DateTime.Now , Email="ahmed.aouladaomar@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00014",CNE = "00451" , FirstName="soufiane", LastName = "yousfimghari", CodeAppoge = "1011", date_birth = DateTime.Now , Email="soufiane.yousfimghari@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00015",CNE = "00551" , FirstName="firdaous", LastName = "bendoudouch", CodeAppoge = "1012", date_birth = DateTime.Now , Email="firdaous.bendoudouch@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00016",CNE = "00651" , FirstName="mohamed", LastName = "ouadii", CodeAppoge = "1013", date_birth = DateTime.Now , Email="mohamed.ouadii@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00017",CNE = "00751" , FirstName="mohamedhatim", LastName = "mharzi", CodeAppoge = "1014", date_birth = DateTime.Now , Email="mohamedhatim.mharzi@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00018",CNE = "00851" , FirstName="yassir", LastName = "benboubker", CodeAppoge = "1015", date_birth = DateTime.Now , Email="yassir.benboubker@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00019",CNE = "00951" , FirstName="mohammed", LastName = "chafik", CodeAppoge = "1016", date_birth = DateTime.Now , Email="mohammed.chafik@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00020",CNE = "01051" , FirstName="aya", LastName = "berraj", CodeAppoge = "1017", date_birth = DateTime.Now , Email="aya.berraj@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00021",CNE = "02051" , FirstName="soumaya", LastName = "manar", CodeAppoge = "1018", date_birth = DateTime.Now , Email="soumaya.manar@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00022",CNE = "03051" , FirstName="amine", LastName = "chtioui", CodeAppoge = "1019", date_birth = DateTime.Now , Email="amine.chtioui@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00023",CNE = "04051" , FirstName="saad", LastName = "bahnini", CodeAppoge = "1020", date_birth = DateTime.Now , Email="saad.bahnini@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00024",CNE = "05051" , FirstName="mohammed", LastName = "chanaa", CodeAppoge = "1021", date_birth = DateTime.Now , Email="mohammed.chanaa@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00025",CNE = "06051" , FirstName="noureddine", LastName = "elhankari", CodeAppoge = "1022", date_birth = DateTime.Now , Email="noureddine.elhankari@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00026",CNE = "07051" , FirstName="zineb", LastName = "mouhim", CodeAppoge = "1023", date_birth = DateTime.Now , Email="zineb.mouhim@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00027",CNE = "08051" , FirstName="mohammedamine", LastName = "bousslama", CodeAppoge = "1024", date_birth = DateTime.Now , Email="mohammedamine.bousslama@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00028",CNE = "09051" , FirstName="mahmoud", LastName = "laal", CodeAppoge = "1025", date_birth = DateTime.Now , Email="mahmoud.laal@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
                    new Models.User{CIN = "00029",CNE = "10051" , FirstName="Mourad", LastName = "chairi", CodeAppoge = "1026", date_birth = DateTime.Now , Email="Mourad.chairi@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt}

                );

                context.SaveChanges();
                // Seeding user Privileges
                context.UserPrivileges.AddRange(
                    new Models.UserPrivilege{UserID = 1,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 2,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 3,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 4,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 5,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 6,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 7,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 8,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 9,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 10,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 11,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 12,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 13,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 14,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 15,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 16,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 17,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 18,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 19,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 20,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 21,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 22,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 23,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 24,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 25,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 26,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 27,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 28,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 29,PrivilegeID = 3},
                    new Models.UserPrivilege{UserID = 30,PrivilegeID = 3}
                );

                context.SaveChanges();

                // Seeding Trainings
                context.Trainings.AddRange(
                    new Models.Training{ Title = "AP1"},
                    new Models.Training{ Title = "AP2"},
                    new Models.Training{ Title = "AP3"},
                    new Models.Training{ Title = "AP4"},
                    new Models.Training{ Title = "G3EI1"},
                    new Models.Training{ Title = "G3EI2"},
                    new Models.Training{ Title = "G3EI3"},
                    new Models.Training{ Title = "G3EI4"},
                    new Models.Training{ Title = "G3EI5"},
                    new Models.Training{ Title = "GIND1"},
                    new Models.Training{ Title = "GIND2"},
                    new Models.Training{ Title = "GIND3"},
                    new Models.Training{ Title = "GIND4"},
                    new Models.Training{ Title = "GIND5"},
                    new Models.Training{ Title = "GINF1"},
                    new Models.Training{ Title = "GINF2"},
                    new Models.Training{ Title = "GINF3"},
                    new Models.Training{ Title = "GINF4"},
                    new Models.Training{ Title = "GINF51"},
                    new Models.Training{ Title = "GINF52"},
                    new Models.Training{ Title = "GSEA1"},
                    new Models.Training{ Title = "GSEA2"},
                    new Models.Training{ Title = "GSEA3"},
                    new Models.Training{ Title = "GSEA4"},
                    new Models.Training{ Title = "GSEA51"},
                    new Models.Training{ Title = "GSEA52"},
                    new Models.Training{ Title = "GSTR1"},
                    new Models.Training{ Title = "GSTR2"},
                    new Models.Training{ Title = "GSTR3"},
                    new Models.Training{ Title = "GSTR4"},
                    new Models.Training{ Title = "GSTR51"},
                    new Models.Training{ Title = "GSTR52"}
                );
                
                context.SaveChanges();

                // Seeding modules 

                context.Modules.AddRange(
                    new Models.Module{ ChefID = 1 , TrainingID = 1, Title = "Algebre1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 1, Title = "Analyse1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 1, Title = "Physique1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 1, Title = "Mécanique1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 1, Title = "Chimie" },
                    new Models.Module{ ChefID = 1 , TrainingID = 1, Title = "LC1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 2, Title = "Algebre2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 2, Title = "Analyse1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 2, Title = "Physique2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 2, Title = "Physique3" },
                    new Models.Module{ ChefID = 1 , TrainingID = 2, Title = "Info1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 2, Title = "LC2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 3, Title = "Algebre3" },
                    new Models.Module{ ChefID = 1 , TrainingID = 3, Title = "Analyse3" },
                    new Models.Module{ ChefID = 1 , TrainingID = 3, Title = "Mecanique2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 3, Title = "Physique4" },
                    new Models.Module{ ChefID = 1 , TrainingID = 3, Title = "Info2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 3, Title = "LC3" },
                    new Models.Module{ ChefID = 1 , TrainingID = 4, Title = "analyse4" },
                    new Models.Module{ ChefID = 1 , TrainingID = 4, Title = "Maths Appliquées" },
                    new Models.Module{ ChefID = 1 , TrainingID = 4, Title = "Physique 5" },
                    new Models.Module{ ChefID = 1 , TrainingID = 4, Title = "Physique 3" },
                    new Models.Module{ ChefID = 1 , TrainingID = 4, Title = "Info 3" },
                    new Models.Module{ ChefID = 1 , TrainingID = 4, Title = "LC2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 5, Title = "Statistique et signal" },
                    new Models.Module{ ChefID = 1 , TrainingID = 5, Title = "electronique" },
                    new Models.Module{ ChefID = 1 , TrainingID = 5, Title = "Matériaux" },
                    new Models.Module{ ChefID = 1 , TrainingID = 5, Title = "Informatique" },
                    new Models.Module{ ChefID = 1 , TrainingID = 5, Title = "Automatique 1 et Electrotechnique 1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 5, Title = "Management de l'entreprise 1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 6, Title = "Electrotechnique 2 et simulation" },
                    new Models.Module{ ChefID = 1 , TrainingID = 6, Title = "Thermodynamique industrielle" },
                    new Models.Module{ ChefID = 1 , TrainingID = 6, Title = "Machines Industrielles" },
                    new Models.Module{ ChefID = 1 , TrainingID = 6, Title = "Thermodynamique" },
                    new Models.Module{ ChefID = 1 , TrainingID = 6, Title = "Energies et environnement" },
                    new Models.Module{ ChefID = 1 , TrainingID = 6, Title = "Langue et communication 1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 7, Title = "Automatismes Industriels " },
                    new Models.Module{ ChefID = 1 , TrainingID = 7, Title = "Technologie mécanique " },
                    new Models.Module{ ChefID = 1 , TrainingID = 7, Title = "Solaire Thermique et geothermie " },
                    new Models.Module{ ChefID = 1 , TrainingID = 7, Title = "Energie eolienne" },
                    new Models.Module{ ChefID = 1 , TrainingID = 7, Title = "Législation et droit de l'environnement " },
                    new Models.Module{ ChefID = 1 , TrainingID = 7, Title = "LC2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 8, Title = "Technologies Gazière et Thermique" },
                    new Models.Module{ ChefID = 1 , TrainingID = 8, Title = "Management Environnemental" },
                    new Models.Module{ ChefID = 1 , TrainingID = 8, Title = "Maintenance et qualité" },
                    new Models.Module{ ChefID = 1 , TrainingID = 8, Title = "Energies Photovoltaique et hydraulique" },
                    new Models.Module{ ChefID = 1 , TrainingID = 8, Title = "Managelent QHSE" },
                    new Models.Module{ ChefID = 1 , TrainingID = 8, Title = "Management de l'entreprise 2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 9, Title = "Valorisation des déchets" },
                    new Models.Module{ ChefID = 1 , TrainingID = 9, Title = "REsponsabilité sociétale des entreprises " },
                    new Models.Module{ ChefID = 1 , TrainingID = 9, Title = "Efficacité Energétique" },
                    new Models.Module{ ChefID = 1 , TrainingID = 9, Title = "Optimisation des sytèmes énergétiques hybrides" },
                    new Models.Module{ ChefID = 1 , TrainingID = 9, Title = "Chauffage et climatisation " },
                    new Models.Module{ ChefID = 1 , TrainingID = 9, Title = "Management de l'entreprise 3" },
                    new Models.Module{ ChefID = 1 , TrainingID = 10, Title = "statistiques et signal " },
                    new Models.Module{ ChefID = 1 , TrainingID = 10, Title = "electronique " },
                    new Models.Module{ ChefID = 1 , TrainingID = 10, Title = "matériaux " },
                    new Models.Module{ ChefID = 1 , TrainingID = 10, Title = "informatique " },
                    new Models.Module{ ChefID = 1 , TrainingID = 10, Title = "automatique 1 et electrotechnique 1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 10, Title = "Management de l'entreprise 1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 11, Title = "Resistance des matériaux " },
                    new Models.Module{ ChefID = 1 , TrainingID = 11, Title = "Fluides et structures" },
                    new Models.Module{ ChefID = 1 , TrainingID = 11, Title = "Machines industrielles " },
                    new Models.Module{ ChefID = 1 , TrainingID = 11, Title = "Simulation et métrologie" },
                    new Models.Module{ ChefID = 1 , TrainingID = 11, Title = "Systèmes d'information" },
                    new Models.Module{ ChefID = 1 , TrainingID = 11, Title = "LC1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 12, Title = "Automatisme et maintenance " },
                    new Models.Module{ ChefID = 1 , TrainingID = 12, Title = "Commande industrielle " },
                    new Models.Module{ ChefID = 1 , TrainingID = 12, Title = "Outils d'aide à la décision " },
                    new Models.Module{ ChefID = 1 , TrainingID = 12, Title = "Fabrication mécanique " },
                    new Models.Module{ ChefID = 1 , TrainingID = 12, Title = "Conception mécanique " },
                    new Models.Module{ ChefID = 1 , TrainingID = 12, Title = "LC2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 13, Title = "Modélisation & Implantatio n" },
                    new Models.Module{ ChefID = 1 , TrainingID = 13, Title = "Gestion de production" },
                    new Models.Module{ ChefID = 1 , TrainingID = 13, Title = "Maintenance et qualité " },
                    new Models.Module{ ChefID = 1 , TrainingID = 13, Title = "Pilotage et amélioration continue " },
                    new Models.Module{ ChefID = 1 , TrainingID = 13, Title = "ERP & MES " },
                    new Models.Module{ ChefID = 1 , TrainingID = 13, Title = "LC3" },
                    new Models.Module{ ChefID = 1 , TrainingID = 14, Title = "sypply chain & ordonnancement " },
                    new Models.Module{ ChefID = 1 , TrainingID = 14, Title = "Logistique" },
                    new Models.Module{ ChefID = 1 , TrainingID = 14, Title = "Sécurité et energie " },
                    new Models.Module{ ChefID = 1 , TrainingID = 14, Title = "Qualité et environnement " },
                    new Models.Module{ ChefID = 1 , TrainingID = 14, Title = "Controle & supervision " },
                    new Models.Module{ ChefID = 1 , TrainingID = 14, Title = "Management de l'entreprise 3" },
                    new Models.Module{ ChefID = 1 , TrainingID = 15, Title = "Maths pour l'ingénieur " },
                    new Models.Module{ ChefID = 1 , TrainingID = 15, Title = "Signal " },
                    new Models.Module{ ChefID = 1 , TrainingID = 15, Title = "Electronique " },
                    new Models.Module{ ChefID = 1 , TrainingID = 15, Title = "Programmation" },
                    new Models.Module{ ChefID = 1 , TrainingID = 15, Title = "Bases de données & réseaux " },
                    new Models.Module{ ChefID = 1 , TrainingID = 15, Title = "LC1 " },
                    new Models.Module{ ChefID = 1 , TrainingID = 16, Title = "Développement Informatique2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 16, Title = "Bases de données : Développement et manipulation " },
                    new Models.Module{ ChefID = 1 , TrainingID = 16, Title = "Théorie des graphes et recherche opérationnelle" },
                    new Models.Module{ ChefID = 1 , TrainingID = 16, Title = "Réseaux 1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 16, Title = "Arhcitecture & Linux " },
                    new Models.Module{ ChefID = 1 , TrainingID = 16, Title = "Management de l'entreprise 1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 17, Title = "Programmation Orientée Objet & XML" },
                    new Models.Module{ ChefID = 1 , TrainingID = 17, Title = "Qualité & Approche processus " },
                    new Models.Module{ ChefID = 1 , TrainingID = 17, Title = "Modélisation orientée objet et IHM" },
                    new Models.Module{ ChefID = 1 , TrainingID = 17, Title = "Bases de données avancées 1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 17, Title = "Administration et programmation système " },
                    new Models.Module{ ChefID = 1 , TrainingID = 17, Title = "LC2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 18, Title = "Technologies distribuées" },
                    new Models.Module{ ChefID = 1 , TrainingID = 18, Title = "Bases de données avancées II & Cloud " },
                    new Models.Module{ ChefID = 1 , TrainingID = 18, Title = "Traitement de l'image" },
                    new Models.Module{ ChefID = 1 , TrainingID = 18, Title = "Programmation déclarative et TAV" },
                    new Models.Module{ ChefID = 1 , TrainingID = 18, Title = "Sécurité & Cryptographie" },
                    new Models.Module{ ChefID = 1 , TrainingID = 18, Title = "Management de l'enteprise 2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 19, Title = "Technologies NET et J2EE" },
                    new Models.Module{ ChefID = 1 , TrainingID = 19, Title = "IA Avancée et ingénierie de connaissance" },
                    new Models.Module{ ChefID = 1 , TrainingID = 19, Title = "Systèmes d'information décisionnel et BI" },
                    new Models.Module{ ChefID = 1 , TrainingID = 19, Title = "Management des systèmes d'information" },
                    new Models.Module{ ChefID = 1 , TrainingID = 19, Title = "Web services et Applications" },
                    new Models.Module{ ChefID = 1 , TrainingID = 19, Title = "Management de l'entreprise3" },
                    new Models.Module{ ChefID = 1 , TrainingID = 20, Title = "Technologies .NET et J2EE" },
                    new Models.Module{ ChefID = 1 , TrainingID = 20, Title = "IA Avancée et ingénierie de connaissance " },
                    new Models.Module{ ChefID = 1 , TrainingID = 20, Title = "Systèmes d'information décisionnels et BI" },
                    new Models.Module{ ChefID = 1 , TrainingID = 20, Title = "Qualité référentiels logiciel " },
                    new Models.Module{ ChefID = 1 , TrainingID = 20, Title = "Test et fiabilité des logiciels " },
                    new Models.Module{ ChefID = 1 , TrainingID = 20, Title = "Management de l'entreprise 3" },
                    new Models.Module{ ChefID = 1 , TrainingID = 21, Title = "Mathématiques Appliquées" },
                    new Models.Module{ ChefID = 1 , TrainingID = 21, Title = "Traitement du signal " },
                    new Models.Module{ ChefID = 1 , TrainingID = 21, Title = "Electronique1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 21, Title = "Ondes et propagation" },
                    new Models.Module{ ChefID = 1 , TrainingID = 21, Title = "Automatique 1 et electrotech 1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 21, Title = "Langues et communication 1 " },
                    new Models.Module{ ChefID = 1 , TrainingID = 22, Title = "Assembleur, Microprocesseur et microcontroleur " },
                    new Models.Module{ ChefID = 1 , TrainingID = 22, Title = "Electronique 3 et TP" },
                    new Models.Module{ ChefID = 1 , TrainingID = 22, Title = "Electrotechnique 2 et installations électriques " },
                    new Models.Module{ ChefID = 1 , TrainingID = 22, Title = "Instrumentation et automatique 2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 22, Title = "Informatique " },
                    new Models.Module{ ChefID = 1 , TrainingID = 22, Title = "Management de l'entreprise 1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 23, Title = "Antennes et Technologies" },
                    new Models.Module{ ChefID = 1 , TrainingID = 23, Title = "Commandes numériques" },
                    new Models.Module{ ChefID = 1 , TrainingID = 23, Title = "Robotique et langage C++" },
                    new Models.Module{ ChefID = 1 , TrainingID = 23, Title = "Electronique de puissance" },
                    new Models.Module{ ChefID = 1 , TrainingID = 23, Title = "Conception de systèmes électroniques" },
                    new Models.Module{ ChefID = 1 , TrainingID = 23, Title = "LC2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 24, Title = "Automates et DSP" },
                    new Models.Module{ ChefID = 1 , TrainingID = 24, Title = "Circuits et sys intégrés " },
                    new Models.Module{ ChefID = 1 , TrainingID = 24, Title = "Traitement d'images et système de vision" },
                    new Models.Module{ ChefID = 1 , TrainingID = 24, Title = "Programmation VHDL" },
                    new Models.Module{ ChefID = 1 , TrainingID = 24, Title = "Qualité et maintenance " },
                    new Models.Module{ ChefID = 1 , TrainingID = 24, Title = "Management de l'entreprise2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 25, Title = "Systèmes embarqués" },
                    new Models.Module{ ChefID = 1 , TrainingID = 25, Title = "Systèmes temps réel " },
                    new Models.Module{ ChefID = 1 , TrainingID = 25, Title = "Vérification et développement mobile " },
                    new Models.Module{ ChefID = 1 , TrainingID = 25, Title = "Association Conv / Machine et Modélisation " },
                    new Models.Module{ ChefID = 1 , TrainingID = 25, Title = "Diagnostic des SA et modélisatio n" },
                    new Models.Module{ ChefID = 1 , TrainingID = 25, Title = "Management de l'entreprise 3 " },
                    new Models.Module{ ChefID = 1 , TrainingID = 26, Title = "Systèmes embarqués " },
                    new Models.Module{ ChefID = 1 , TrainingID = 26, Title = "Systèmes temps réel " },
                    new Models.Module{ ChefID = 1 , TrainingID = 26, Title = "Vérification et développement mobile " },
                    new Models.Module{ ChefID = 1 , TrainingID = 26, Title = "Systèmes de vision et optoélectronique " },
                    new Models.Module{ ChefID = 1 , TrainingID = 26, Title = "Multimédia" },
                    new Models.Module{ ChefID = 1 , TrainingID = 26, Title = "Management de l'entreprise 3" },
                    new Models.Module{ ChefID = 1 , TrainingID = 27, Title = "Maths pour l'ingénieur" },
                    new Models.Module{ ChefID = 1 , TrainingID = 27, Title = "Signal " },
                    new Models.Module{ ChefID = 1 , TrainingID = 27, Title = "Electronique 1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 27, Title = "Telecom 1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 27, Title = "Automatique & réseaux " },
                    new Models.Module{ ChefID = 1 , TrainingID = 27, Title = "LC1 " },
                    new Models.Module{ ChefID = 1 , TrainingID = 28, Title = "Electronique 2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 28, Title = "Info 1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 28, Title = "Théorie des graphes et Applications" },
                    new Models.Module{ ChefID = 1 , TrainingID = 28, Title = "Réseaux 1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 28, Title = "Telecom 2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 28, Title = "Management de l'entreprise 1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 29, Title = "Telecom 3" },
                    new Models.Module{ ChefID = 1 , TrainingID = 29, Title = "Réseaux 2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 29, Title = "Telecom 4" },
                    new Models.Module{ ChefID = 1 , TrainingID = 29, Title = "Telecom 5" },
                    new Models.Module{ ChefID = 1 , TrainingID = 29, Title = "Informatique 2 " },
                    new Models.Module{ ChefID = 1 , TrainingID = 29, Title = "LC2 " },
                    new Models.Module{ ChefID = 1 , TrainingID = 30, Title = "Telecom 6" },
                    new Models.Module{ ChefID = 1 , TrainingID = 30, Title = "Traitement de l'image et de la parole " },
                    new Models.Module{ ChefID = 1 , TrainingID = 30, Title = "Réseaux 3" },
                    new Models.Module{ ChefID = 1 , TrainingID = 30, Title = "Réseaux 4" },
                    new Models.Module{ ChefID = 1 , TrainingID = 30, Title = "Réseaux Mobiles 1" },
                    new Models.Module{ ChefID = 1 , TrainingID = 30, Title = "Management de l'entreprise 2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 31, Title = "Réseaux mobiles 2" },
                    new Models.Module{ ChefID = 1 , TrainingID = 31, Title = "Sécurité et interconnexion des réseaux " },
                    new Models.Module{ ChefID = 1 , TrainingID = 31, Title = "Telecom 7" },
                    new Models.Module{ ChefID = 1 , TrainingID = 31, Title = "Info 3" },
                    new Models.Module{ ChefID = 1 , TrainingID = 31, Title = "Telecom 8" },
                    new Models.Module{ ChefID = 1 , TrainingID = 31, Title = "Management de l'entreprise 3" },
                    new Models.Module{ ChefID = 1 , TrainingID = 32, Title = "Architectures matérielles et sécurité " },
                    new Models.Module{ ChefID = 1 , TrainingID = 32, Title = "Objets communicants" },
                    new Models.Module{ ChefID = 1 , TrainingID = 32, Title = "Déploiement d'infrastuctures et de services opérateurs " },
                    new Models.Module{ ChefID = 1 , TrainingID = 32, Title = "Recherche et innovation" },
                    new Models.Module{ ChefID = 1 , TrainingID = 32, Title = "Mobile et développement " },
                    new Models.Module{ ChefID = 1 , TrainingID = 32, Title = "Management de l'entreprise 3" }
                );

                // 

                context.SaveChanges();

                context.StudentTraining.AddRange(
                    new Models.StudentTraining{ StudentID = 1 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 2 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 3 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 4 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 5 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 6 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 7 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 8 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 9 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 10 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 11 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 12 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 13 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 14 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 15 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 16 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 17 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 18 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 19 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 20 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 21 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 22 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 23 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 24 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 25 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 26 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 27 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 28 , TrainingID = 18},
                    new Models.StudentTraining{ StudentID = 29 , TrainingID = 18}
                );

                context.SaveChanges();
            }
        }
    }
}