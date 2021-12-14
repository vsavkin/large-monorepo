import { render } from '@testing-library/react';

import Icon90 from './icon90';

describe('Icon90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon90 />);
    expect(baseElement).toBeTruthy();
  });
});
