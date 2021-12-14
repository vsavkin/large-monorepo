import { render } from '@testing-library/react';

import Alert158 from './alert158';

describe('Alert158', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert158 />);
    expect(baseElement).toBeTruthy();
  });
});
