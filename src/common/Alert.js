import { XCircleIcon } from '@heroicons/react/solid';

const Alert = ({ alert, handleClose }) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 9000);
  }
  const Color = () => {
    switch (alert.type) {
      case 'error':
        return 'bg-red-100 text-red-800';
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'info':
        return 'bg-sky-100 text-sky-800';
      case 'warning':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-indigo-100 text-indigo-800';
    }
  };

  console.log(alert.type);
  return (
    <>
      {alert?.active && (
        <div x-data className={`${Color()} p-5 w-full rounded mb-8`}>
          <div className="flex space-x-3">
            <div className="flex-1 leading-tight text-sm text-black font-medium">{alert.message}</div>
            <button type="button">
              <XCircleIcon className="w-6 h-6 text-gray-600" onClick={handleClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
