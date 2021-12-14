import { render } from '@testing-library/react';

import Icon35 from './icon35';

describe('Icon35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon35 />);
    expect(baseElement).toBeTruthy();
  });
});
