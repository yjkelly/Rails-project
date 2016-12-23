module CartsHelper

  def createPayPalQueryString(items_array)

    #item_name_x=name&amount_x=amnt&quantity_x=amnt
    #format taken from: http://stackoverflow.com/questions/3308898/paying-for-multiple-items-at-once-via-paypal
    queryString = ""
    items_array.each_with_index { |item, index|
      queryString+="item_name_#{index+1}=#{item[:name]}&amount_#{index+1}=#{item[:amount]}"
      if index+1 < items_array.size
        queryString+='&'
      end
    }
    queryString
  end
end
