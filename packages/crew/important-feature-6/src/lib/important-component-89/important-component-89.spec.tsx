import { render } from '@testing-library/react';

import ImportantComponent89 from './important-component-89';

describe('ImportantComponent89', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent89 />);
    expect(baseElement).toBeTruthy();
  });
});
