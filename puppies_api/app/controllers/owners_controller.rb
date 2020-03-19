class OwnersController < ApplicationController

  def index
    @owners = Owner.all 

    render json: @owners, include: :puppies
  end

  def create
    @owner = Owner.create({
      name: params[:name]
    })

    render json: @owner 
  end

end
