import { render } from '@testing-library/react';

import Alert182 from './alert182';

describe('Alert182', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert182 />);
    expect(baseElement).toBeTruthy();
  });
});
