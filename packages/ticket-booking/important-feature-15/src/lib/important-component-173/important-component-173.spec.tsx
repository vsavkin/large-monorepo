import { render } from '@testing-library/react';

import ImportantComponent173 from './important-component-173';

describe('ImportantComponent173', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent173 />);
    expect(baseElement).toBeTruthy();
  });
});
