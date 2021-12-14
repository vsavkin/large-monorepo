import { render } from '@testing-library/react';

import Icon50 from './icon50';

describe('Icon50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon50 />);
    expect(baseElement).toBeTruthy();
  });
});
