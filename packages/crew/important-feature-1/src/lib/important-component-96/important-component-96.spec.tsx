import { render } from '@testing-library/react';

import ImportantComponent96 from './important-component-96';

describe('ImportantComponent96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent96 />);
    expect(baseElement).toBeTruthy();
  });
});
