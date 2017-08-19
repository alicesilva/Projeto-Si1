package com.ufcg.si1.model.queixa;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

import com.ufcg.si1.model.Endereco;

@Entity
@DiscriminatorValue(value = "queixa_geral")
public class QueixaGeral extends Queixa {

	@OneToOne(cascade=CascadeType.ALL)
	private Endereco enderecoDoEstabelecimento;
	
	public QueixaGeral(Long id, String descricao, String comentario,
            String nome, String email,
			  String rua, String uf, String cidade, QueixaStatus status) {
		super(id, descricao, comentario, nome, email, rua, uf, cidade, status);
		this.enderecoDoEstabelecimento = new Endereco(rua, uf, cidade);
	}
	
	public QueixaGeral() {
		
	}
	
	public Endereco getEnderecoDoEstabelecimento() {
		return enderecoDoEstabelecimento;
	}

	@Override
	public String showType() {
		return "geral";
	}
	
}