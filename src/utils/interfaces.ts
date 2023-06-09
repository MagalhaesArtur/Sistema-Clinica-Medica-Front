export interface UserProps {
  username: string;
  email: string;
  password: string;
}

interface Authority {
  authority: String;
}

export interface ConsultasProps {
  id?: string;
  date: number;
  isConfirmed: boolean;
  doctor: Doctor;
  patient: UserAuthProps;
}

export interface UserAuthProps {
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  authorities: Array<Authority>;
  credentialsNonExpired: boolean;
  email: String;
  enabled: boolean;
  id: string;
  password: null;
  username: String;
}

export interface Doctor {
  id?: number;
  name: String;
  photoURL: string;
  specialty: String;
}

export interface DTOdate {
  ano: string;
  mes?: number;
  dia: string;
  horario: string;
}

export interface DTOConsulta {
  patient_id: string;
  doctor_id: string;
  data: DTOdate;
}
