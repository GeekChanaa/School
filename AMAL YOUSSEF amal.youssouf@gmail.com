AMAL YOUSSEF	amal.youssouf@gmail.com
AMECHNOUE KHALID	kamechnoue@gmail.com
AZYAT Abdelilah	azyat2037@gmail.com
EL ALAMI HASSOUN Mohamed	malami_nti@yahoo.es
LAZAAR Saiida	slazaar@uae.ac.ma
MAOUENE Mohammed mounir	mounir.maouene@gmail.com
OUAHABI Zineb	ouahabizineb@gmail.com
SABIL Jalila	jsabil.sabil@gmail.com
TANANA Mariam	mtanana@uae.ac.ma
ZOUGARI Tarek	Zougari123@gmail.com
AZZABAKH Aniss	azzabakh@ensat.ac.ma
BOUAJAJ Adel	dbouajaj@yahoo.fr
BOUMANE Abderazzak	abd_boumane@yahoo.fr
BRITEL Mohammed Reda	mrbritel@hotmail.com
CHERKAOUI Abdeljabbar	cherkaouiabdeljabbar@yahoo.fr
DERRHI MOSTAPHA	mderrhi@yahoo.fr
EL FADAR Abdellah	aelfadar@yahoo.fr
EL KALKHA Hanae	elkalkha_hanae@yahho.fr
EL MOURABIT Aimad	elmourabit_aimad@yahoo.fr
ELALAIJI Rachid	rachid_elalaiji@yahoo.fr
ELMENZHI Lamiae	lmenzhiensa@gmail.com
KAMACH Oulaid	okamach@yahoo.fr
LYHYAOUI Abdelouahid	lyhyaoui@gmail.com
MOUSSA Ahmed	amoussa@uae.ac.ma	
SARSRI Driss	dsarsri@yahoo.fr
SEDQUI Abdelfettah	trador@hotmail.fr
BADIR Hassan	hbadir@gmail.com
BELMOKADDEM Houda	houda.belmokadem@gmail.com
CHAHBOUN Nouha	nchahboun@yahoo.fr
CHAHBOUN Asaad	chahboun_asaad@yahoo.fr
CHRAIBI Lotfi	lchraibi@uae.ac.ma	
EL HADDAD Mohammed	elhaddad.mohamed@gmail.com
EL OUALKADI Ahmed	eloualkadi@gmail.com
EZZINE Abdelhak	ezzine.abdelhak@gmail.com
FISSOUNE Rachida	fissoune@gmail.com
HARIS Nadia	nadine.haris@gmail.com
LAAZIZ Yassin	ylaaziz@gmail.com
LAHJOMRI Fouad	lahjomri@ensat.ac.ma	
MOUSSAOUI Mohamed	mohamed.moussaoui@hotmail.fr
MEZROUI Soufiane	mezroui.soufiane@yahoo.fr
RAHALI EL AZZOUZI Saida	rahali_elazzouzi@yahoo.fr
SAMADI Hassan	ha.samadi@gmail.com
TOUHAMI Fakhita	touhami@ensat.ac.ma	
LACHKAR Abdelmonaime	abdelmonaime-lachkar@yahoo.fr
GHAILANI Mohamed 	ghalamed@gmail.com






	



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
    new Models.User{CIN = "00029",CNE = "10051" , FirstName="Mourad", LastName = "chairi", CodeAppoge = "1026", date_birth = DateTime.Now , Email="Mourad.chairi@etu.uae.ac.ma", PasswordHash = passhash, PasswordSalt = passsalt},
);