import { render } from '@testing-library/react';

import Alert164 from './alert164';

describe('Alert164', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert164 />);
    expect(baseElement).toBeTruthy();
  });
});
