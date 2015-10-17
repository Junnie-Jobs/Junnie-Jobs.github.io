package first;

public class BirthDay {
	
	private int day;
	private int month;
	private int year;
	
	
	public BirthDay(int day, int month, int year){
		
		this.day = day;
		this.month = month;
		this.year = year;
		
	}
	
	public void dayRange(int dayValid){
		
		if((this.day<1) || (this.day>dayValid))
			System.out.println(this.year+"년 "+this.month+"월 "+this.day+"일은 존재하지 않는 날짜입니다."); 
		else if((dayValid == 29) && (this.day == 29))
			System.out.println(this.year+"년 "+this.month+"월 "+this.day+"일은 윤년입니다.");
		else
			System.out.println(this.year+"년 "+this.month+"월 "+this.day+"일은 유효한 날짜입니다");
	}
	
	
	public void setDay() {

		setYear();
		setMonth();
		
		if(this.month == 2){
			
			if((this.year%4 == 0)&&(this.year%100 != 0) || (this.year%400 == 0)){
				dayRange(29);
			}
			else{
				dayRange(28);
			}
		}
		else if((this.month == 4)||(this.month == 9)||(this.month == 11)){
			dayRange(30);
				
		}else{
			dayRange(31);
			
		}
				
			}

	public void setYear() {
		if(this.year<0)
			System.out.println(this.year+"년 "+this.month+"월 "+this.day+"일은 아직 오지 않은 시간입니다.");
			
	}
	
	public void setMonth() {
		if((this.month<1)||(this.month>12))
			System.out.println(this.year+"년 "+this.month+"월 "+this.day+"일은 존재하지 않는 날짜입니다.");
	}

	

}
