var socket = io();

socket.on('connect', function() {
    console.log('Connected to the server');
    // socket.emit('createMessage', {
    //     from:'jen@example.com',
    //     text:'Hey, this is ashu'
    // });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage',function(message){
    console.log('New Message ', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

socket.emit('createMessage',{
    from:'Frank',
    text:'hi'
},function(data){
    console.log(data);
});

jQuery('#message-form').on('submit', function(e){
    e.preventDefault();
    
    socket.emit('createMessage', {
        from:'User',
        text:jQuery('[name=message]').val()
    }, function(){

    });
});