function giaiPtBac1(a,b){
    if(a==0){
        if(b==0){
            return "Phuong trinh vo so nghiem";
        }
        else{
            return "Phuong trinh vo nghiem";
        }
    } else{
        return -b/a;
    }
}
