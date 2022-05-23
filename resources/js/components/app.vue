<template>
    <form @submit.prevent="updateUser()">
        <div class="card">
            <div class="card-body">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Product Price</th>
                            <th class="text-center"><button type="button" class="btn btn-primary" @click.prevent="addRow()"><i class="fa fa-plus"></i></button></th>
                        </tr>
                    </thead>
                    <tbody id="body">
                        <tr id="row0">
                            <td><input class="form-control" type="text" name="pname[]" id="name0" placeholder="Product Name"></td>
                            <td><input class="form-control" type="number" name="quantity[]" id="quantity0" placeholder="Quantity"></td>
                            <td><input class="form-control" type="number" name="price[]" id="price0" placeholder="Product Price"></td>
                            <!-- <td class="text-center"><button type="button" class="btn btn-danger" @click.prevent="delRow(0)"><i class="fa fa-trash"></i></button></td> -->
                        </tr>
                    </tbody>
                </table>
                <div class="float-right">
                    <button class="btn btn-primary">Print</button>
                </div>
            </div>
        </div>
        <div class="d-none" id="printMe">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody id="pbody">
                </tbody>
            </table>
        </div>
    </form>
</template>
<script>
var id=0;
export default {
    data() {
    },
    methods:{
        addRow(){
            id=id+1;
            var trow='<tr id="row'+id+'">';
                trow+='<td><input class="form-control" type="text" name="pname[]" id="name'+id+'" placeholder="Product Name"></td>';
                trow+='<td><input class="form-control" type="number" name="quantity[]" id="quantity'+id+'" placeholder="Quantity"></td>';
                trow+='<td><input class="form-control" type="number" name="price[]" id="price'+id+'" placeholder="Product Price"></td>';
                // trow+='<td class="text-center"><button type="button" class="btn btn-danger" @click.prevent="delRow('+id+')"><i class="fa fa-trash"></i></button></td>';
            trow+='</tr>';
            $("#body").append(trow);
        },
        delRow(e){
            $("#row"+e).remove();
        },
        updateUser(){
            const options = {
                specs: [
                    'fullscreen=yes',
                    'titlebar=yes',
                    'scrollbars=yes'
                ],
                styles: [
                    'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css',
                ]
            }
            var total=0;
            var totalItems=0;
            var totalQuantity=0;
            for(var i=0;i<=id;i++){
                var name=$("#name"+i).val();
                var quantity=$("#quantity"+i).val();
                var price=$("#price"+i).val();
                if(name=="" || quantity=="" || price=="") continue;
                else{
                    var prow='<tr><td>'+name+'</td><td>'+quantity+'</td><td>'+price+'</td></tr>';
                    if(i==0) $("#pbody").html(prow);
                    else $("#pbody").append(prow);
                    totalItems=totalItems+1;
                    totalQuantity=totalQuantity+parseInt(quantity);
                    total=total+(parseInt(quantity)*parseInt(price));
                }
            }
            var totalRow='<tr><td>Items: '+totalItems+'</td><td>Total Items: '+totalQuantity+'</td><td>Total: '+total+'</td></tr>';
            if(totalItems==0) $("#pbody").html(totalRow);
            else $("#pbody").append(totalRow);
            this.$htmlToPaper('printMe',options);
        },
    },
};
</script>