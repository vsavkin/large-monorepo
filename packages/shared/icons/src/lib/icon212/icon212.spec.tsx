import { render } from '@testing-library/react';

import Icon212 from './icon212';

describe('Icon212', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon212 />);
    expect(baseElement).toBeTruthy();
  });
});
