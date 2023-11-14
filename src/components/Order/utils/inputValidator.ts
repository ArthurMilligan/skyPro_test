interface IInputValidatorArgs{
  type: string;
  value: string;
}

const inputValidator = ({type, value}:IInputValidatorArgs): string => {
	let error = "";
	switch (type) {
	case "name":
		if (~value.search(/[^A-Za-zА-Яа-я-]/) || value.search(/[A-ZА-Я]/) !== 0) {
          error = 'Некорректное имя'
		}

		break;
	case "phone":
		if ((~value.search(/[^0-9]/) && ~value.search(/[^0-9]/)) || value.length < 10 || value.length > 15) {
			error = "Некорректный номер";
		}

		break;

	}

	return error;
};

export default inputValidator;
