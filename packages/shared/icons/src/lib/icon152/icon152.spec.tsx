import { render } from '@testing-library/react';

import Icon152 from './icon152';

describe('Icon152', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon152 />);
    expect(baseElement).toBeTruthy();
  });
});
