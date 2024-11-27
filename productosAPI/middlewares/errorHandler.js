module.exports = (er, request, rpt, next) => {
    const status = er.status || 500;
    const sms = er.message || 'Error';
  
    console.error(`Error: ${status} descripcion ${sms}`);
  
    rpt.status(status).json({
      error: {
        status,
        sms,
      },
    });
  };
  