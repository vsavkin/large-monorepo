import { render } from '@testing-library/react';

import Icon229 from './icon229';

describe('Icon229', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon229 />);
    expect(baseElement).toBeTruthy();
  });
});
