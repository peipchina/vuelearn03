var vm = new Vue({
	el : "#app",
	data: function(){
	 return{
	 	input: '',
			infos:{
			name:'',
			sex: '',
			phoneNum: '',
			birthday: '',
		},
		 tableData: [{
            sex: '2016-05-02',
            name: '王小虎',
            phoneNum: '15245244',
            birthday: '2019-01-02'
          }, {
            sex: '2016-05-02',
            name: '王小虎',
            phoneNum: '15245244',
            birthday: '2019-01-02'
          }, {
            sex: '2016-05-02',
            name: '王小虎',
            phoneNum: '158525544',
            birthday: '2019-01-02'
          }, {
            sex: '2016-05-02',
            name: '王小虎',
            phoneNum: '15245244',
            birthday: '2019-01-02'
          }]
				
	}
},
	methods:{
		addinfo: function(){
			var p ={sex:this.infos.sex,name:this.infos.name,phoneNum:this.infos.phoneNum,birthday:this.infos.birthday}
            this.tableData.push(p);
		}
	}
})