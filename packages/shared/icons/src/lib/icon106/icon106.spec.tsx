import { render } from '@testing-library/react';

import Icon106 from './icon106';

describe('Icon106', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon106 />);
    expect(baseElement).toBeTruthy();
  });
});
