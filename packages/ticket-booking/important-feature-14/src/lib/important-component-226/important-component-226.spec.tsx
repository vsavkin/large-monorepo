import { render } from '@testing-library/react';

import ImportantComponent226 from './important-component-226';

describe('ImportantComponent226', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent226 />);
    expect(baseElement).toBeTruthy();
  });
});
