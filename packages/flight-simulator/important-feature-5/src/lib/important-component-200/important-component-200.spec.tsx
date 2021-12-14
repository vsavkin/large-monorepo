import { render } from '@testing-library/react';

import ImportantComponent200 from './important-component-200';

describe('ImportantComponent200', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent200 />);
    expect(baseElement).toBeTruthy();
  });
});
