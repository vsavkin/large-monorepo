import { render } from '@testing-library/react';

import Icon115 from './icon115';

describe('Icon115', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon115 />);
    expect(baseElement).toBeTruthy();
  });
});
