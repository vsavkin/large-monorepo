import { render } from '@testing-library/react';

import Alert78 from './alert78';

describe('Alert78', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert78 />);
    expect(baseElement).toBeTruthy();
  });
});
